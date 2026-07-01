import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type CuCardTone = 'neutral' | 'accent';

@customElement('cu-card')
export class CuCard extends LitElement {
  @property({ reflect: true })
  tone: CuCardTone = 'neutral';

  static styles = css`
    :host {
      background: var(--cu-color-surface-raised);
      border: 1px solid var(--cu-color-border);
      border-radius: var(--cu-radius-md);
      box-shadow: var(--cu-shadow-sm);
      color: var(--cu-color-text);
      display: block;
      padding: var(--cu-space-5);
    }

    :host([tone='accent']) {
      background: var(--cu-color-accent-soft);
      border-color: color-mix(in srgb, var(--cu-color-accent), white 68%);
    }

    header {
      margin-bottom: var(--cu-space-3);
    }

    ::slotted([slot='heading']) {
      font: 700 1.15rem/1.2 var(--cu-font-sans);
      margin: 0;
    }

    .content {
      display: grid;
      gap: var(--cu-space-4);
    }

    ::slotted(p) {
      color: var(--cu-color-text-muted);
      line-height: 1.55;
      margin: 0;
    }
  `;

  render() {
    return html`
      <header>
        <slot name="heading"></slot>
      </header>
      <div class="content">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cu-card': CuCard;
  }
}

