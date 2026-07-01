import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type CuButtonVariant = 'primary' | 'secondary' | 'ghost';
export type CuButtonType = 'button' | 'submit' | 'reset';

@customElement('cu-button')
export class CuButton extends LitElement {
  @property({ reflect: true })
  variant: CuButtonVariant = 'primary';

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ reflect: true })
  type: CuButtonType = 'button';

  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      align-items: center;
      border: 1px solid transparent;
      border-radius: var(--cu-radius-md);
      cursor: pointer;
      display: inline-flex;
      font: 600 0.95rem/1 var(--cu-font-sans);
      gap: var(--cu-space-2);
      justify-content: center;
      min-height: 40px;
      padding: 0 var(--cu-space-4);
      transition:
        background-color var(--cu-transition-fast),
        border-color var(--cu-transition-fast),
        color var(--cu-transition-fast),
        box-shadow var(--cu-transition-fast);
      width: 100%;
    }

    button:focus-visible {
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--cu-color-focus), transparent 70%);
      outline: none;
    }

    :host([variant='primary']) button {
      background: var(--cu-color-accent);
      color: white;
    }

    :host([variant='primary']) button:hover:not(:disabled) {
      background: var(--cu-color-accent-strong);
    }

    :host([variant='secondary']) button {
      background: var(--cu-color-accent-soft);
      border-color: color-mix(in srgb, var(--cu-color-accent), white 70%);
      color: var(--cu-color-accent-strong);
    }

    :host([variant='secondary']) button:hover:not(:disabled) {
      border-color: var(--cu-color-accent);
    }

    :host([variant='ghost']) button {
      background: transparent;
      color: var(--cu-color-accent-strong);
    }

    :host([variant='ghost']) button:hover:not(:disabled) {
      background: var(--cu-color-surface-muted);
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.56;
    }
  `;

  render() {
    return html`
      <button ?disabled=${this.disabled} type=${this.type}>
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cu-button': CuButton;
  }
}

