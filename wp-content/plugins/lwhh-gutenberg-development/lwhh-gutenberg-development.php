<?php

/**
 * 
 * Plugin Name: LWHH Gutenberg Development
 * Plugin URI:  https:
 * Description: Demonstration plugin to learn WordPress gutenberg development with LWHH
 * Version: 0.0.1     
 * Author:  LWHH
 * Author URI: https:
 * License:     GPLv2 or later
 * Text Domain: lwhhgd
 * Domain Path: /languages/
 */

// if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
defined('ABSPATH' ) || exit;

require plugin_dir_path(__FILE__)  . 'blocks/block-1/index.php';

// require_once(plugin_dir_path( __FILE__ )."blocks/block-1/index.php");




function lwhhgd_enqueue_block_assets() {
    wp_enqueue_style(
        'lwhhgd-block-1',
        plugins_url('blocks/block-1/style.css', __FILE__),
        array('wp-edit-blocks')
    );


    if(is_admin()){
        wp_enqueue_style(
            'lwhhgd-block-1-editor',
            plugins_url('blocks/block-1/editor.css', __FILE__),
            array('wp-edit-blocks')
        );
    }
}

// It works in front and back both side
add_action('enqueue_block_assets', 'lwhhgd_enqueue_block_assets');
// It will work only in editor / backend side
// add_action('enqueue_editor_block_assets', '');



// custom block register

function lwhhgd_add_block_categories($categories) {
    if ('page' !== get_post_type($post)) {
        return $categories;
    }
    return array_merge( $categories, array(
        array(
            'slug' => 'lwhhgd',
            'title' => __('LWHH GD', 'lwhhgd'),
            'icon' => 'editor-video'
        ),
        /*array(
            'slug' => 'lwhhgd2',
            'title' => __('LWHH GD2', 'lwhhgd'),
            'icon' => 'editor-video'
        )*/
    ) );
}

add_filter('block_categories','lwhhgd_add_block_categories', 10, 2);