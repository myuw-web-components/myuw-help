# myuw-help versions

## 1.5.7

* Update font-weight of dialog content

## 1.5.6

* Remove references to Roboto and Arial fonts and replaced with Red Hat Display and Red Hat Text

## 1.5.5

2022-02-21

* Update dialog position from fixed to absolute

## 1.5.4

2022-02-14

* Move backdrop shadow inside of dialog container to improve Screen Reader navigation across the browsers
## 1.5.3

2020-04-23

* Adjust position of the shadow behind the dialog, to ensure entire content is covered

## 1.5.2

2020-03-05

* Cross browser support for styles outside of :host() pseudo-class which isn't supported by older IE and Edge versions

## 1.5.1

2020-01-15

* Fixes dialog opening to `position:fixed` the dialog ( [#20][] )

## 1.5.0

2020-01-15

* Adds keyboard trapping to dialog opened upon clicking myuw-help

## 1.4.0

### Added

* Delivery pipeline and docs for contributors

## 1.3.2

### Fixed

* Fixed positioning of dialog on mobile and some browsers (now checks for more consistent positioning)

## 1.3.1

### Fixed

* Removed a typo that caused a javascript error.

## 1.3.0

### Added

* Added support for sending a custom dialog position as part of the `set-myuw-help-position` CustomEvent

## 1.2.0

### Added

* Added top bar button with attribute to show it (`show-bar-button`)

### Changed

* Dialog now determines its position when opened for more reliable positioning


[#20]: https://github.com/myuw-web-components/myuw-help/pull/20
