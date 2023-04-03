import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";

export const AboutMe = () => {
  return (
    <Container>
      <Text as="h4" type="heading3" color="grey1" id="aboutMe">
        About me
      </Text>
      <Text type="body1" color="grey1">
        <p>
            
        After roughly 10 years working in a bank, I developed essential skills
        for working in groups and on the dynamics of working in a large company,
        and I am very grateful for that, but I understood which that job didn’t
        awaken me to the best that I could deliver in all terms from creativity
        to pure performance.
        </p>
        <br/>
        <p>
        I took a break on my career and went looking for
        what I really wanted to accomplish in life, I always wanted to create
        and build, which led me back to what I studied in high school: IT.
        </p>
      </Text>
    </Container>
  );
};
