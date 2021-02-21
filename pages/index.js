import Flex from '../components/Flex'

const Index = () => (
    <Flex
        center
        height="100vh"
    >
        <Flex
            border="1px solid gray"
            boxShadow="0px 0px 10px 1px rgba(0,0,0,0.75)"
            p={2}
            color="darkGray"
        >
            Welcome to NextJS with Styled Components and Rebass!
        </Flex>
    </Flex>
)

export default Index