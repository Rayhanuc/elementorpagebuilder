<?php

defined ('ABSPATH') || exit;

/* Register block 1
*/




// add_action( 'enqueue_block_assets', 'lwhhgd_register_block_1', 10, 1 );

// Code added in this file  02/03/2020 07:37 PM 
/* register_block_type('namespace/hello-world', array(
    // 'editor_style' => 'style-sheet handle', // wp_register_style()
    // 'style' => 'stylesheet handle',
    // 'editor_script' => 'script handle',
    // 'script' => 'script handle',
    // 'attributes' => array(

    // ),
    'render_callback' => 'render_helloworld'
)); */

// real block register example start
// wp_register_script($handle, $src, $deps, $in_footer);
/* wp_register_script(
    'lwhhgd-block-1',
    plugins_url('index-es5.js', __FILE__),
    array('wp-blocks','wp-i18n', 'wp-element' )
);
register_block_type(
    'lwhhgd/block-1', 
    array('editor_script' => 'lwhhgd-block-1')
); */
// real block register example end

/* function render_helloworld() {
    
} */


function lwhhgd_register_block_1() {
    wp_register_script(
        'lwhhgd-block-1',
        plugins_url('index.js', __FILE__),
        array('wp-blocks','wp-i18n', 'wp-element' )
    );

    /* wp_register_style(
        'lwhhgd-block-1',
        plugins_url('style.css', __FILE__),
        array('wp-blocks')
    ); */

    /* wp_register_style(
        'lwhhgd-block-1-editor',
        plugins_url('editor.css', __FILE__),
        array('wp-edit-blocks')
    ); */

    register_block_type(
    	'lwhhgd/hello-world', 
    	array(
            'editor_script' => 'lwhhgd-block-1',
            // 'editor_style' => 'lwhhgd-block-1-editor',
            // 'style' => 'lwhhgd-block-1'           
        )
    );

   /* wp_enqueue_script(
		'lwhhgd-block-1',
        plugins_url('index-es5.js', __FILE__),
        array('wp-blocks','wp-i18n', 'wp-element' )
	);*/

}

add_action('init', 'lwhhgd_register_block_1');