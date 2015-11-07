'use strict';

angular.module('green.version', [
  'green.version.interpolate-filter',
  'green.version.version-directive'
])

.value('version', '0.1');
