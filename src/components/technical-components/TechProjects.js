import React, { Component } from 'react';
import { Button, Segment } from 'semantic-ui-react';

class TechProjects extends Component {
  render() {
    return (
      <div>
        <Segment>
          <Button color="dark blue" href='https://github.com/Newland-A/finally_animals'>Pet Tracker Application
          </Button><br /><br />
            <div>
              <p>An application where animals can find a veternarian where they are located as they travel across the country.</p>
            </div>
        </Segment>
        <Segment>
          <Button href='https://github.com/Newland-A/wish_list_front_end' color="dark blue">Santa's Wish List Front End
          </Button>
          <Button href='https://github.com/Newland-A/wish_list_rails_back_end' color="dark blue">Santa's Wish List Back End
          </Button><br /><br />
            <div>
              <p>An application for children to be able to send their wishes to santa without being able to see them and give them a since a of hope in troubling times.</p>
            </div>
        </Segment>
        <Segment>
          <Button href='https://github.com/Newland-A/kitchen_organizer' color="dark blue">Kitchen Organizer
          </Button><br /><br />
              <div>
                <p>A work in progress for people to organizer their kitchens ingredients and lookup recipes by what ingredients they have in the kitchen</p>
              </div>
        </Segment>
      </div>
    );
  }
}

export default TechProjects;

