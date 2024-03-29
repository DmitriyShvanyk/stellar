import { t } from 'i18next'

export function getCookie(name: string): string | undefined {
	const matches = document.cookie.match(
		new RegExp('(?:^|; )' + name.replace(/([$?*|{}\]\\^])/g, '\\$1') + '=([^;]*)')
	);
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(
	name: string,
	value: string,
	props: { [key: string]: any } & { expires?: number | Date | string } = {}
) {
	props = props || {};
	let exp = props.expires;
	if (typeof exp == 'number' && exp) {
		const d = new Date();
		d.setTime(d.getTime() + exp * 1000);
		exp = props.expires = d;
	}
	if (exp && (exp as Date).toUTCString) {
		props.expires = (exp as Date).toUTCString();
	}
	value = encodeURIComponent(value);
	let updatedCookie = name + '=' + value;
	for (const propName in props) {
		updatedCookie += '; ' + propName;
		const propValue = props[propName];
		if (propValue !== true) {
			updatedCookie += '=' + propValue;
		}
	}
	document.cookie = updatedCookie;
}

export function deleteCookie(name: string) {
	setCookie(name, '', { expires: -1 });
}

export const getOrderStatus = (status: string) => {
	if (status === 'done') return `${t('orderStatusCompleted')}`
	if (status === 'created') return `${t('orderStatusCreated')}`
	if (status === 'pending') return `${t('orderStatusGettingReady')}`
	return false
}

export const getOrderStatusColor = (status: string) => status === 'done' ? '#00CCCC' : '#FFFFFF'