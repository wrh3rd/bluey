import * as React from 'react';
import Layout from '../../layouts/layout';
import { Button, ButtonGroup, ButtonGroupShape, ButtonType, Scene, Text, ThemeType, Title } from '../../..';

export default () => {
  return (
    <Layout>
      <Scene>
        <Title>Buttons</Title>

        <Title size={4}>Default Buttons</Title>
        <Text>These are the default buttons</Text>
        <ButtonGroup>
          <Button>Default Button</Button>
          <Button theme={ThemeType.Primary}>Primary Button</Button>
          <Button onClick={() => { alert('here'); }} theme={ThemeType.Danger} title="Danger">Danger Button</Button>
          <Button theme={ThemeType.Success}>Success Button</Button>
          <Button theme={ThemeType.Warning}>Warning Button</Button>
        </ButtonGroup>

        <Title size={4}>Outlined Buttons</Title>
        <ButtonGroup>
          <Button type={ButtonType.Outlined}>Default Button</Button>
          <Button theme={ThemeType.Primary} type={ButtonType.Outlined}>Primary Button</Button>
          <Button theme={ThemeType.Danger} type={ButtonType.Outlined}>Danger Button</Button>
          <Button theme={ThemeType.Success} type={ButtonType.Outlined}>Success Button</Button>
          <Button theme={ThemeType.Warning} type={ButtonType.Outlined}>Warning Button</Button>
        </ButtonGroup>

        <Title size={4}>Clear Buttons</Title>
        <ButtonGroup>
          <Button type={ButtonType.Clear}>Default Button</Button>
          <Button theme={ThemeType.Primary} type={ButtonType.Clear}>Primary Button</Button>
          <Button theme={ThemeType.Danger} type={ButtonType.Clear}>Danger Button</Button>
          <Button theme={ThemeType.Success} type={ButtonType.Clear}>Success Button</Button>
          <Button theme={ThemeType.Warning} type={ButtonType.Clear}>Warning Button</Button>
        </ButtonGroup>

        <Title size={4}>Link Buttons</Title>
        <ButtonGroup>
          <Button type={ButtonType.Link}>Default Button</Button>
          <Button theme={ThemeType.Primary} type={ButtonType.Link}>Primary Button</Button>
          <Button theme={ThemeType.Danger} type={ButtonType.Link}>Danger Button</Button>
          <Button theme={ThemeType.Success} type={ButtonType.Link}>Success Button</Button>
          <Button theme={ThemeType.Warning} type={ButtonType.Link}>Warning Button</Button>
        </ButtonGroup>
      
        <Title size={4}>Pill Buttons</Title>
        <ButtonGroup shape={ButtonGroupShape.Pill}>
          <Button>Default Button</Button>
          <Button theme={ThemeType.Primary}>Primary Button</Button>
          <Button theme={ThemeType.Danger} title="Danger">Danger Button</Button>
          <Button theme={ThemeType.Success}>Success Button</Button>
          <Button theme={ThemeType.Warning}>Warning Button</Button>
        </ButtonGroup>
        
        <Title size={4}>Square Buttons</Title>
        <ButtonGroup shape={ButtonGroupShape.Square}>
          <Button>Default Button</Button>
          <Button theme={ThemeType.Primary}>Primary Button</Button>
          <Button onClick={() => { alert('here'); }} theme={ThemeType.Danger} title="Danger">Danger Button</Button>
          <Button theme={ThemeType.Success}>Success Button</Button>
          <Button theme={ThemeType.Warning}>Warning Button</Button>
        </ButtonGroup>
        
        <Title size={4}>Radio Buttons</Title>
        <ButtonGroup>
          <Button name="ex8" type={ButtonType.Radio}>Left Radio</Button>
          <Button checked={true} name="ex8" type={ButtonType.Radio}>Middle Radio</Button>
          <Button name="ex8" type={ButtonType.Radio}>Right Radio</Button>
        </ButtonGroup>
        
        <Title size={4}>Checkbox Buttons</Title>
        <ButtonGroup>
          <Button type={ButtonType.Checkbox}>Left Checkbox</Button>
          <Button type={ButtonType.Checkbox}>Middle Checkbox</Button>
          <Button type={ButtonType.Checkbox}>Right Checkbox</Button>
        </ButtonGroup>
      </Scene>
    </Layout>
  )
}