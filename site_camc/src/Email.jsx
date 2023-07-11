
import { Html, Head, Body, Preview, Container, Heading, Text } from '@react-email/components';

export function Email(props) {

  return (
    <Html>
      <Head />
      <Preview>Thank you for joining our waitlist and for your patience</Preview>
      <Body>
        <Container>
          <Heading>Coming Soon.</Heading>
          <Text>
            Thank you {props.name} for joining our waitlist and for your patience. We
            will send you a note when we have something new to share.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default Email;