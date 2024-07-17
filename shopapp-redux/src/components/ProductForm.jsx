import React from 'react'
import { defaultTheme, Provider, Grid, View } from '@adobe/react-spectrum';
import { Card } from '@swc-react/card';

export default function ProductForm() {
  let [name, setName] = React.useState('');

  let onSubmit = (e) => {
    e.preventDefault();

    // Submit data to your backend API...
    alert(name);
  };
  return (
    <Provider theme={defaultTheme}>
      <Form onSubmit={onSubmit} maxWidth="size-3000">
        <TextField label="Name" value={name} onChange={setName} />
        <div>You entered: {name}</div>
        <ButtonGroup>
          <Button type="submit" variant="primary">Submit</Button>
          <Button type="reset" variant="secondary">Reset</Button>
        </ButtonGroup>
      </Form>
    </Provider>
  );
  {/* <Grid
        areas={[
          'header  header',
          'sidebar content',
          'footer  footer'
        ]}
        columns={['1fr', '3fr']}
        rows={['size-1000', 'auto', 'size-1000']}
        height="size-6000"
        gap="size-100">
        <View backgroundColor="celery-600" gridArea="header" />
        <View backgroundColor="blue-600" gridArea="sidebar" />
        <View backgroundColor="grey-600" gridArea="content">
          <Card heading="Card Heading" subheading="JPG Photo">
            <img
              slot="cover-photo"
              src="https://picsum.photos/200/300"
              alt="Demo Image"
            />
            <div slot="footer">Footer</div>
          </Card>
        </View>
        <View backgroundColor="magenta-600" gridArea="footer" />
      </Grid> */}
   
  )
}
