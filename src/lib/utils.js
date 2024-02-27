export const iconStringToArray = (icons) => 
	icons
		.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/)
		.filter(i => i)

export const pullTemplateData = template => ({
	name: template.name,
	type: template.type,
})