import { Component, Prop } from '@stencil/core';
import * as marked_ from 'marked';

// workaround as standard import method give an error "Cannot call a namespace ('marked')""
const marked = marked_;

@Component({
  tag: 'markdowntohtml-component',
  styleUrl: 'markdowntohtml-component.css',
  shadow: true
})
export class MarkdowntohtmlComponent {
  @Prop() content: string;

  convertToHTML(): string {
    console.log("convertingmdtohtml")
    return (
      marked.default(this.content)
    );
  }

  render() {
    return <div innerHTML={this.convertToHTML()}/>;
  }
}
