<?php
/*
Plugin Name: Aventurien Labyrinth
Plugin URI: https://wordpress.org/plugins/aventurien-labyrinth/
Description: This plugin allows you to display a navigateable labyrinth in your posts using shortcodes.
Version: 1.00
Author: Klemens
Author URI: https://profiles.wordpress.org/Klemens#content-plugins
Text Domain: aventurien-labyrinth
*/ 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 'aventurien-labyrinth' Shortcode
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

add_shortcode ('aventurien-labyrinth', 'aventurien_labyrinth_shortcode');

function aventurien_labyrinth_shortcode($atts, $content) {

    ini_set('display_errors', 1);
    error_reporting(E_ALL);

	extract(shortcode_atts(array(
		'name' => get_the_title(),
        'style' => 'default'
	), $atts));

	return aventurien_labyrinth_html($name, $content);
}

function aventurien_labyrinth_html($name, $title) {

    $path_local = plugin_dir_path(__FILE__);
    $path_url = plugins_url() . "/aventurien-labyrinth";

    $output = '<iframe src="' . $path_url . '/Labyrinth.php?name=' . $name . '&title=' . $title. '" style="height: 620px; -webkit-filter: none; filter: none; border: 0px;"></iframe>';

	return $output;
}

?>