<?php
/**
 * Plugin Name: LWHH Guten Blocks
 * Plugin URI: https://
 * Description: Gutenberg block development plugin.
 * Author: Rayhan Uddin Chowdhuryu (Bishal)
 * Author URI: https://
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
