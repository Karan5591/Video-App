import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container maxm={"container.xl"} h={"100vh"} p={"16"}>
      <form>
        <VStack
          alignItems={"stretch"}
          spacing={"8"}
          w={["full", "96"]}
          m={"auto"}
          my={"16"}
        >
          <Heading>Welcome Back</Heading>
          <Input
            placeholder={"Email"}
            type={"email"}
            required
            focusBorderColor={"purple.500"}
          ></Input>

          <Input
            placeholder={"Password"}
            type={"Password"}
            required
            focusBorderColor={"purple.500"}
          ></Input>

          <Button variant={"link"} alignSelf={"flex-end"}>
            <Link to={"/forgetpassword"}>Forget Password</Link>
          </Button>

          <Button type={"submit"} colorScheme={"purple"}>
            Log In
          </Button>
          <Text textAlign={"right"}>
            New User?
            <Button variant={"link"} colorScheme={"purple"}>
              <Link to={"/signup"}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
}

export default Login;
