import React from 'react'

import {
  AccentColors,
  IconTabBar,
  IconTabBarDesigns,
  Semantics
} from '../../lib'

import { DemoPage } from '../common/DemoPage'

const DEMO_DATA = {
  title: 'Icon Tab Bar',
  labels: [
    { label: 'Version', text: 'Version 0.0.7', accentColor: AccentColors.COLOR_8 },
    { label: 'Status', text: 'On Going', accentColor: AccentColors.COLOR_5 },
    { label: 'Specification', text: 'Fiori 3', accentColor: AccentColors.COLOR_3 }
  ],
  description: 'Info Label is a small non-interactive numeric or text-based label. Its primary use is to add user-defined characteristic to an object.',
  types: [{
    id: 'InfoTabBar',
    props: [{
      id: 'selectedTab',
      type: 'boolean',
      description: 'The identifier of the currently selected tab',
    },
    {
      id: 'tabs',
      type: 'IconTabBarItemProperties[]',
      description: 'List of tabs to display',
    },
    {
      id: 'onTabSelect',
      type: 'Callback (string) => void',
      description: 'Event called when a tab is selected'
    }],
  }],
  examples: [{
    title: 'Text Only (Inline mode)',
    description: 'The text-only variant is one of the most common types. It allows longer labels, and can also display counters next to the text to indicate the number of items on the tab page. The labels of the tabs do not get truncated. The full text is always shown. As a result, you need to ensure that your labels do not become too long. They should still be easy to read on smaller screens. The control has the same look and feel in Cozy and Compact mode.',
    result: (
      <IconTabBar
        selectedTab='tab1'
        tabs={[{
          id: 'tab1',
          title: 'Info'
        },
        {
          id: 'tab2',
          title: 'Attachements (16)'
        }, {
          id: 'tab3',
          title: 'Approvals (42)'
        }]}
      />
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<IconTabBar`}</div>
        <div>{`  selectedTab='tab1'`}</div>
        <div>{`  tabs={[`}</div>
        <div>{`    { id: 'tab1', title: 'Info' },`}</div>
        <div>{`    { id: 'tab2', title: 'Attachements (16)' },`}</div>
        <div>{`    { id: 'tab3', title: 'Approvals (42)' },`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'Text Only (Inline mode) Semantic Colors',
    result: (
      <IconTabBar
        tabs={[{
          id: 'tab1',
          title: 'Section Positive',
          semantic: Semantics.POSITIVE,
          selected: true
        }, {
          id: 'tab2',
          title: 'Section Negative',
          semantic: Semantics.NEGATIVE,
          selected: true
        }, {
          id: 'tab3',
          title: 'Section Critical',
          semantic: Semantics.CRITICAL,
          selected: true
        }, {
          id: 'tab4',
          title: 'Section Informative',
          semantic: Semantics.INFORMATIVE,
          selected: true
        }]}
      />
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>
        <div>{`<IconTabBar`}</div>
        <div>{`  tabs={[`}</div>
        <div>{`    { id: 'tab1', title: 'Section Positive', semantic: Semantics.POSITIVE, selected: true },`}</div>
        <div>{`    { id: 'tab2', title: 'Section Negative', semantic: Semantics.NEGATIVE, selected: true },`}</div>
        <div>{`    { id: 'tab3', title: 'Section Critical', semantic: Semantics.CRITICAL, selected: true },`}</div>
        <div>{`    { id: 'tab4', title: 'Section Informative', semantic: Semantics.INFORMATIVE, selected: true },`}</div>
        <div>{`  ]}`}</div>
        <div>{`/>`}</div>
      </div>
    )
  }, {
    title: 'Counters and Text',
    description: 'Counters can be shown on top of labels. In this case you need to apply the fd-icon-tab-bar--counters modifier class. The control has the same look and feel in Cozy and Compact mode.',
    result: (
      <IconTabBar
        design={IconTabBarDesigns.COUNTERS}
        tabs={[{
          id: 'tab1',
          title: 'Info'
        }, {
          id:
            'tab2',
          title: 'Attachements',
          counter: '16',
          selected: true
        }, {
          id: 'tab3',
          title: 'Approvals',
          counter: '42'
        }]}
      />
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>

      </div>
    )
  }, {
    title: 'Icon Only in Compact Mode',
    description: 'In compact mode you need to apply an additional modifier class fd-icon-tab-bar--compact.',
    result: (
      <IconTabBar
        compact
        design={IconTabBarDesigns.ICON_ONLY}
        tabs={[{
          id: 'tab1',
          icon: 'cart',
          counter: '2'
        }, {
          id: 'tab2',
          icon: 'pending',
          counter: '23',
          selected: true
        }, {
          id: 'tab3',
          icon: 'picture',
          counter: '10'
        }]}
      />
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>

      </div>
    )
  }, {
    title: 'Icon Only Semantic Colors',
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <IconTabBar
          design={IconTabBarDesigns.ICON_ONLY}
          tabs={[{
            id: 'tab1',
            counter: '2',
            icon: 'history',
            semantic: Semantics.POSITIVE,
          }, {
            id: 'tab2',
            counter: '23',
            icon: 'card',
            selected: true,
            semantic: Semantics.NEGATIVE,
          }, {
            id: 'tab3',
            counter: '10',
            icon: 'cart',
            semantic: Semantics.CRITICAL,
          }, {
            id: 'tab4',
            counter: '10',
            icon: 'cart',
            semantic: Semantics.INFORMATIVE,
          }]}
        />
        <IconTabBar
          compact
          design={IconTabBarDesigns.ICON_ONLY}
          tabs={[{
            id: 'tab1',
            counter: '2',
            icon: 'history',
            semantic: Semantics.POSITIVE,
          }, {
            id: 'tab2',
            counter: '23',
            icon: 'card',
            selected: true,
            semantic: Semantics.NEGATIVE,
          }, {
            id: 'tab3',
            counter: '10',
            icon: 'cart',
            semantic: Semantics.CRITICAL,
          }, {
            id: 'tab4',
            counter: '10',
            icon: 'cart',
            semantic: Semantics.INFORMATIVE,
          }]}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>

      </div>
    )
  }, {
    title: 'Icon',
    description: 'To display Icon Tabs with labels and counters you need to apply the fd-icon-tab-bar--icon modifier class. The counters are optional and can be ommited. The label is always positioned at the bottom. If you decide to use labels, use them for all tabs. The badge is rendered at the top right hand corner of the icon container. Consider using shorter labels or text tabs (without icons), since text tabs cannot get truncated.',
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <IconTabBar
          design={IconTabBarDesigns.ICON}
          tabs={[{
            id: 'tab1',
            icon: 'filter',
            selected: true,
            title: 'Description',
          }, {
            id: 'tab2',
            counter: '99',
            icon: 'customer',
            title: 'Description',
          }, {
            id: 'tab3',
            counter: '56 of 123',
            icon: 'chain-link',
            title: 'Description',
          }]}
        />
        <IconTabBar
          compact
          design={IconTabBarDesigns.ICON}
          tabs={[{
            id: 'tab1',
            counter: '25 of 789 items',
            icon: 'iphone',
            title: 'Claim Overweights'
          }, {
            id: 'tab2',
            icon: 'record',
            selected: true,
            title: 'Confirm',
          }, {
            id: 'tab3',
            counter: '12',
            icon: 'world',
            title: 'Checks',
          }]}
        />
        <IconTabBar
          design={IconTabBarDesigns.ICON}
          tabs={[{
            id: 'tab1',
            counter: '2',
            icon: 'play',
            selected: true,
            semantic: Semantics.POSITIVE,
            title: 'Description',
          }, {
            id: 'tab2',
            counter: '2',
            icon: 'unfavorite',
            semantic: Semantics.NEGATIVE,
            title: 'Description',
          }, {
            id: 'tab3',
            counter: '2',
            icon: 'shipping-status',
            semantic: Semantics.CRITICAL,
            title: 'Description',
          }]}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>

      </div>
    )
  }, {
    title: 'Process',
    description: 'You can also use the tab bar to depict a process. In this case, each tab stands for one step. You need to add the fd-icon-tab-bar--process modifier class and a sibling html element with fd-icon-tab-bar__separator class to the tab.',
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <IconTabBar
          design={IconTabBarDesigns.ICON}
          process
          tabs={[{
            id: 'tab1',
            badge: true,
            icon: 'filter',
            selected: true,
            title: 'Description',
          }, {
            id: 'tab2',
            counter: '99',
            icon: 'customer',
            title: 'Description',
          }, {
            id: 'tab3',
            counter: '56 of 123',
            icon: 'chain-link',
            title: 'Description',
          }]}
        />
        <IconTabBar
          compact
          design={IconTabBarDesigns.ICON}
          process
          tabs={[{
            id: 'tab1',
            icon: 'iphone',
            counter: '25 of 789 items',
            title: 'Claim Overweights'
          }, {
            id: 'tab2',
            icon: 'record',
            title: 'Confirm',
            selected: true
          }, {
            id: 'tab3',
            icon: 'world',
            counter: '12',
            title: 'Checks'
          }]}
        />
        <IconTabBar
          design={IconTabBarDesigns.ICON}
          process
          tabs={[{
            id: 'tab1',
            counter: '2',
            icon: 'play',
            title: 'Description',
            semantic: Semantics.POSITIVE,
            selected: true,
          }, {
            id: 'tab2',
            counter: '2',
            icon: 'unfavorite',
            semantic: Semantics.NEGATIVE,
            title: 'Description',
          }, {
            id: 'tab3',
            counter: '2',
            icon: 'shipping-status',
            semantic: Semantics.CRITICAL,
            title: 'Description',
          }]}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>

      </div>
    )
  }, {
    title: 'Universal Icon Tab Bar Multi Click Area',
    description: 'In case of two click areas for tabs with sub-tabs, the behaviour for regular tabs (without sub-items) remains unchanged, like described above the tabs get selected immediately. Tabs with two click areas behave differently: when the main part of the tab is clicked, it is highlighted and then selected immediately. Clicking the second area opens a menu (Popover) containing the sub-items. Once a sub-item is clicked, the main tab is highlighted as selected.',
    result: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <IconTabBar
          design={IconTabBarDesigns.ICON}
          tabs={[{
            id: 'tab1',
            action: 'decline',
            badge: true,
            icon: 'filter',
            selected: true,
            title: 'Description',
          }, {
            id: 'tab2',
            action: 'decline',
            counter: '99',
            icon: 'customer',
            title: 'Description',
          }, {
            id: 'tab3',
            action: 'decline',
            counter: '56 of 123',
            icon: 'chain-link',
            title: 'Description',
          }]}
        />
        <IconTabBar
          compact
          tabs={[{
            id: 'tab1',
            badge: true,
            action: 'decline',
            title: 'Claim Overweights'
          }, {
            id: 'tab2',
            action: 'decline',
            title: 'Confirm',
            selected: true
          }, {
            id: 'tab3',
            action: 'decline',
            title: 'Checks'
          }]}
        />
      </div>
    ),
    code: (
      <div style={{ whiteSpace: 'pre' }}>

      </div>
    )
  }]
}

export const IconTabBarDemo = () => {
  return <DemoPage {...DEMO_DATA} />
}