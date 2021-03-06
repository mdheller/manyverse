/* Copyright (C) 2018-2019 The Manyverse Authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import {Platform} from 'react-native';
const {isIPhoneX} = require('react-native-status-bar-height');

export const Dimensions = {
  horizontalSpaceLarge: 26,
  horizontalSpaceBig: 16,
  horizontalSpaceNormal: 12,
  horizontalSpaceSmall: 7,
  horizontalSpaceTiny: 4,

  verticalSpaceLarger: 28,
  verticalSpaceLarge: 20,
  verticalSpaceBig: 14,
  verticalSpaceNormal: 10,
  verticalSpaceSmall: 7,
  verticalSpaceTiny: 3,

  /**
   * Space between top of the screen and the beginning of the screen title.
   */
  verticalSpaceIOSTitle: 16,

  avatarSizeBig: 80,
  avatarSizeNormal: 45,
  avatarSizeSmall: 32,
  avatarBorderRadius: 3,

  iconSizeLarge: 36,
  iconSizeBig: 30,
  iconSizeNormal: 24,
  iconSizeSmall: 18,
  toolbarHeight: Platform.select({
    ios: isIPhoneX ? 100 : 76,
    default: 56,
  }),
};
