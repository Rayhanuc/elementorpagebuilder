<?php

defined ('ABSPATH') || exit;

/* Register block 1
*/

function lwhhgd_register_btn() {
    wp_register_script(
        'lwhhgd-btn',
        plugins_url('index.js', __FILE__),
        array('wp-blocks','wp-i18n', 'wp-element' )
    );

    wp_register_style(
        'lwhhgd-btn',
        plugins_url('style.css', __FILE__)
    );

    register_block_type(
    	'lwhhgd/btn', 
    	array(
            'editor_script' => 'lwhhgd-btn',
            'editor_style' => 'lwhhgd-btn',
            'style' => 'lwhhgd-btn'           
        )
    );

}

add_action('init', 'lwhhgd_register_btn');