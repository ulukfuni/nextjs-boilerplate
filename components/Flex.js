import { Flex as Base } from 'rebass'
import styled from 'styled-components'

const Flex = styled(Base)`
    ${props => (props.boxShadow ? `box-shadow: ${props.boxShadow};` : null)}
    ${props => (props.height ? `height: ${props.height};` : null)}
    ${props => (props.center ? `justify-content: center; align-items: center;` : null)}
`

export default props => (
    <Flex {...props}>
        {props.children}
    </Flex>
)
