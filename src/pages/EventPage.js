
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Video from '../components/Video/Video';

import eventData from '../data/events.json';

const EventPage = () => {
  const { id } = useParams();

  const eventResult = eventData.events.find(({ videoUrl }) =>
    videoUrl === id
  );

  if (!eventResult) {
    return (<div>Event {id} was not found :(</div>)
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="display-4">{eventResult.title}</h1>
          </Col>
        </Row>
        <Row className="gap-4">
          <Col lg={9} className="border border-danger"><Video  url={eventResult.streamUrl} type={eventResult.streamVideoType} /></Col>
          <Col>
            Ajankohta: {eventResult.startDate} {eventResult.startTime}
            <br />

            <p>{eventResult.speakerName}</p>
            <p>{eventResult.description}</p>
            <img className="img-fluid" src={eventResult.imgUrl}></img>
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
}

export default EventPage;
