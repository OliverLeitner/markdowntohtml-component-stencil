import { Component, Prop } from '@stencil/core';
import * as marked_ from 'marked';
import hljs from 'highlight.js';

const marked = marked_;

@Component({
  tag: 'markdowntohtml-component',
  shadow: false
})
export class MarkdowntohtmlComponent {
  @Prop() content: string;

  convertToHTML(): string {
    return (
      marked.default(this.content)
    );
  }

  render() {
    marked.default.setOptions({
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      }
    });
    return <div innerHTML={this.convertToHTML()}/>;
  }
}
