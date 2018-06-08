=== aventurien-labyrinth ===
Contributors: Klemens
Donate link: 
Tags: rpg aventurien labyrinth
Requires at least: 3.9
Tested up to: 4.8.0
Stable tag: trunk

This plugin allows you to display a navigateable labyrinth in your posts using the shortcodes:

[aventurien-labyrinth name="sample"]Sample Labyrinth[/aventurien-labyrinth]

== Description ==

You can use this plugin to display labyrinths.

For example:

`
[aventurien-labyrinth name="sample"]Sample Labyrinth[/aventurien-labyrinth]
`

Press the WSAD or cursor keys to navigate and SPACE to interact (remove overlays).
Press F1 or H to display the help screen.
Press F12 to view the map as a whole (for debugging purposes).

To create your own labyrinths you need to create these files.
mymap/img/labyrinth.png
mymap/img/triggers.png
mymap/Labyrinth.Triggers.js
Where mymap is the name of your new map.

== Installation ==

1. Upload <strong>aventurien-labyrinth</strong> folder to the <strong>/wp-content/plugins/</strong> directory.
2. Activate the plugin through the <strong>Plugins</strong> menu in WordPress.
3. That's all.

== Changelog ==

= 1.00 =
* first version
