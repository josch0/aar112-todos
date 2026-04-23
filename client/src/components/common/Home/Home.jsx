/*!
 * Copyright (c) 2024 PLANKA Software GmbH
 * Licensed under the Fair Use License: https://github.com/plankanban/planka/blob/master/LICENSE.md
 */

import React from 'react';

import GridProjectsView from './GridProjectsView';

import styles from './Home.module.scss';

const Home = React.memo(() => {
  return (
    <div className={styles.wrapper}>
      <GridProjectsView />
    </div>
  );
});

export default Home;
