import * as React from 'react';
import Layout from '../../layouts/layout';
import { ButtonLink, ButtonType, List, ListItem, ListType, Scene, Title } from '../../..';

export default () => {
  return (
    <Layout>
      <Scene>
        <Title>Components</Title>

        <List type={ListType.None}>
          <ListItem>
            <ButtonLink to="/components/buttons"
                        type={ButtonType.Link}>
              Buttons
            </ButtonLink>
          </ListItem>
        </List>
      </Scene>
    </Layout>
  )
}