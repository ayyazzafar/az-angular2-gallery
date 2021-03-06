# az-angular2-gallery

## Installation

To install this library, run:

```bash
$ npm install az-angular2-gallery --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install az-angular2-gallery
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { AzAngular2GalleryModule } from 'az-angular2-gallery';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    AzAngular2GalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<az-angular2-gallery>

  <az-gallery-image class="image" style="background-image:url(image1.jpg)" href='image1.jpg'>
  </az-gallery-image>

</az-angular2-gallery>

```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Ayyaz](mailto:contact@ayyaz.io)
