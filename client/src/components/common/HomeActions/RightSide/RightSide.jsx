/*!
 * Copyright (c) 2024 PLANKA Software GmbH
 * Licensed under the Fair Use License: https://github.com/plankanban/planka/blob/master/LICENSE.md
 */

import React, { useCallback } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { usePopup } from '../../../../lib/popup';

import selectors from '../../../../selectors';
import entryActions from '../../../../entry-actions';
import SelectOrderStep from './SelectOrderStep';
import { ProjectOrderIcons } from '../../../../constants/Icons';
import styles from './RightSide.module.scss';

const RightSide = React.memo(() => {
  const currentOrder = useSelector(selectors.selectProjectsOrder); // TODO: rename?
  const isHiddenVisible = useSelector(selectors.selectIsHiddenProjectsVisible);

  const dispatch = useDispatch();

  const handleOrderSelect = useCallback(
    (order) => {
      dispatch(entryActions.updateProjectsOrder(order));
    },
    [dispatch],
  );

  const handleToggleHiddenClick = useCallback(() => {
    dispatch(entryActions.toggleHiddenProjects(!isHiddenVisible));
  }, [isHiddenVisible, dispatch]);

  const SelectOrderPopup = usePopup(SelectOrderStep);

  return (
    <>
      <div className={styles.action}>
        <SelectOrderPopup value={currentOrder} onSelect={handleOrderSelect}>
          <button type="button" className={styles.button}>
            <Icon fitted name={ProjectOrderIcons[currentOrder]} />
          </button>
        </SelectOrderPopup>
      </div>
    </>
  );
});

export default RightSide;
