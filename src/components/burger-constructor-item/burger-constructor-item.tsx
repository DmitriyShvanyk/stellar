import { FC, useRef } from 'react'
import { useDispatch } from '../../services/hooks'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrag, useDrop, DropTargetMonitor, XYCoord } from 'react-dnd'
import { delItem, actionItem } from '../../services/actions/data'
import styles from './burger-constructor-item.module.css'

interface IBurgerConstructorItem {
	id?: string;
	idx: number;
	isLocked?: boolean;
	text: string;
	thumbnail: string;
	price: number;
	draggable: boolean;
}

interface DragItem {
	idx: number;
	id: string;
	type: string;
}

export const BurgerConstructorItem: FC<IBurgerConstructorItem> = ({ id, idx, isLocked, text, thumbnail, price, draggable }) => {
	const dispatch = useDispatch()
	const ref = useRef<HTMLDivElement>(null)

	const [{ isDragging }, dragRef] = useDrag({
		type: 'constructor',
		item: { idx },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const [{ handlerId }, dropRef] = useDrop({
		accept: 'constructor',
		collect(monitor) {
			return {
				handlerId: monitor.getHandlerId(),
			};
		},
		hover(item: DragItem, monitor: DropTargetMonitor) {
			if (!ref.current) return
			const dragIndex = item.idx;
			const hoverIndex = idx;

			if (dragIndex === hoverIndex) return
			const hoverBoundingRect = ref.current?.getBoundingClientRect()
			const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
			const clientOffset = monitor.getClientOffset()
			const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return

			dispatch(actionItem(dragIndex, hoverIndex))
			item.idx = hoverIndex
		}
	})

	dragRef(dropRef(ref))

	const opacity = isDragging ? .5 : 1
	const onDelete = () => id && dispatch(delItem(id))

	return (
		<div
			className={`${styles.burgerConstructorItem} flex items-center mb-4`}
			style={{ opacity }}
			ref={ref}
			data-handler-id={handlerId}
		>
			{draggable && (
				<button className={`${styles.burgerConstructorItem__drag} p-0 bg-transparent border-0 outline-none mr-3 cursor-pointer w-6 h-6`}>
					<DragIcon type="secondary" />
				</button>
			)}

			<ConstructorElement
				isLocked={isLocked}
				text={text}
				thumbnail={thumbnail}
				price={price}
				handleClose={() => onDelete()}
			/>
		</div>
	)
}
