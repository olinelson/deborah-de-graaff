import React from "react";
import { Container, Segment, Header, Divider } from "semantic-ui-react";
export default function Teaching() {
  return (
    <>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Container text>
        <Segment inverted>
          <Header inverted> Private Clarinet Studio </Header>
          <p>George Street Studio, Town Hall</p>
          <ul>
            <li>
              One to one teaching of all ages – young, mature, post grad, and
              professional mentoring
            </li>
            <li>
              Scholarship preparation for secondary school awards and
              scholarship
            </li>
            <li>Preparation for university entry auditions</li>
            <li>Preparation for post graduate entry</li>
            <li>Preparation for eisteddfods awards and scholarships</li>
            <li>
              Mentored and teaching continued with many of these students into
              university, and post graduate studies
            </li>
            <li>
              Coached practice classes, group workshops and chamber music studio
              sessions of select serious young and talented students from all
              over Sydney
            </li>
            <li>
              Directed group workshops and chamber music sessions of mature age
              students and music teachers, from all over Sydney
            </li>
            <li>Regularly tutors youth orchestras and wind sectionals</li>
          </ul>
        </Segment>

        <Segment inverted>
          <Header inverted>Sydney Clarinet Choir</Header>
          <p>Coming Soon...</p>
        </Segment>

        <Segment inverted>
          <Header inverted>Online Course</Header>
          <p>Coming Soon...</p>
        </Segment>
      </Container>
    </>
  );
}
