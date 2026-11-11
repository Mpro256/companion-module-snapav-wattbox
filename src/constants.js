module.exports = {
	MODELS: [
		{ id: '250', label: 'WB-250-IPW-2', protocol: 'telnet', outlets: 2 },
		{ id: '300', label: 'WB-300-IP-3', protocol: 'http', outlets: 3, family: 'xml' },
		{ id: '300vb', label: 'WB-300VB-IP-5 (VersaBox)', protocol: 'http', outlets: 5, family: 'xml' },
		{ id: '700', label: 'WB-700-IPV-12', protocol: 'http', outlets: 12, family: 'xml' },
		{ id: '800-6', label: 'WB-800-IPVM-6', protocol: 'http', outlets: 6, family: '800' },
		{ id: '800-12', label: 'WB-800-IPVM-12', protocol: 'http', outlets: 12, family: '800' },
		{ id: '800vps-12', label: 'WB-800VPS-IPVM-12', protocol: 'http', outlets: 12, family: '800' },
		{ id: '800vps', label: 'WB-800VPS-IPVM-18', protocol: 'http', outlets: 18, family: '800' },
		{ id: 'other', label: 'Other' },
	],
}