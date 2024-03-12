# Razor Shared Library

This library contain the shared components for our Razor project. The shared components are custom components and are designed for our project.

## Installation

```shell
npm install razor-shared-library
```

## Used technology

-   React
-   Vite
-   Typescript
-   Material UI
-   Jest
-   Eslint

## Components

We are using Material UI, with some custom styling to pass our style system.

The library still in development phase, so any new components and feature of this components will be added as soon as it is ready:

### Card

```tsx
import { Card } from 'razor-shared-library';

export default function Example() {
    return (
        <Card>
            <div>card content</div>
        </Card>
    );
}
```

### Button

```tsx
import { Button } from 'razor-shared-library';

export default function Example() {
    return (
        <Button
            label="Submit"
            variant="contained"
            color="primary"
            size="medium"
        />
    );
}
```

## License

[MIT](https://github.com/Eng-FerasAhmad/razor-shared-library/blob/master/LICENSE)
