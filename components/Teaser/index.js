import React from 'react'
import {spacing} from '../utils/styleGuide'
import List from '../List'
import Anchor from '../Anchor'

export default ({description, href, hrefDescription = 'View'}) => (
  <div>
    <div>
      {description}
    </div>
    <div style={{
      marginTop: spacing.small,
    }}>
      <List
        items={[
          <Anchor href={href}>
            {hrefDescription}
          </Anchor>
        ]}
        type='link'
      />
    </div>
  </div>
)
