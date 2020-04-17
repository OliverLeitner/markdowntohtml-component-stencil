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

  // TODO: enable whitelisting, i.e. for the own domain...
  setLinkStuff() {
    const html = this.convertToHTML();
    var urlPattern = /(<a [^>]*(href="([^>^\"]*)")[^>]*>)([^<]+)(<\/a>)/gi;
    var output = html.replace(urlPattern, '<a $2 title="$4" target="_blank">$4</a>');
    return output;
  }

  render() {
    marked.default.setOptions({
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      }
    });
    return <div innerHTML={this.setLinkStuff()}/>;
  }
}
