/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, css, customElement } from 'lit-element';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import DDSCardCTA from './card-cta';
import styles from '../link-list/link-list.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Link list item card CTA.
 *
 * @element dds-link-list-item-card-cta
 */
@customElement(`${ddsPrefix}-link-list-item-card-cta`)
class DDSLinkListItemCardCTA extends DDSCardCTA {
  protected _renderImage() {
    // Link list doesn't show video thumbnail in card
    return html`
      <slot name="image" @slotchange="${this._handleSlotChange}"></slot>
    `;
  }

  connectedCallback() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'listitem');
    }
    super.connectedCallback();
  }

  // `styles` here is a `CSSResult` generated by custom WebPack loader
  static get styles() {
    return css`${super.styles}${styles}`;
  }
}

export default DDSLinkListItemCardCTA;