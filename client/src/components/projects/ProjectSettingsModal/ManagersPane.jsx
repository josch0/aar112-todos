/*!
 * Copyright (c) 2024 PLANKA Software GmbH
 * Licensed under the Fair Use License: https://github.com/plankanban/planka/blob/master/LICENSE.md
 */

import React from 'react';
import {  Tab } from 'semantic-ui-react';

import ProjectManagers from '../../project-managers/ProjectManagers';
import styles from './ManagersPane.module.scss';

const ManagersPane = React.memo(() => {
  return (
    <Tab.Pane attached={false} className={styles.wrapper}>
      <ProjectManagers />
    </Tab.Pane>
  );
});

export default ManagersPane;
