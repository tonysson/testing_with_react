import checkPropTypes from 'check-prop-types'

/**
 * Return node(s) with  the given data-test attribute
 * @param {ShallowWrapper} wrapper Enzyme shallow wrapper 
 * @param {string} value  value of data-test for search
 * @returns  {ShallowWrapper}
 */
export const findByTestAttr = (wrapper , value) => {
   return wrapper.find(`[data-test='${value}']`)
}

export const checkProps = (component , conformingProps) => {
   // eslint-disable-next-line react/forbid-foreign-prop-types
   const propError = checkPropTypes(component.propTypes , conformingProps , 'prop' , component.name)
   expect(propError).toBeUndefined()
}
