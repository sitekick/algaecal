<?php 
	//functions.php

function updateJquery() {
	
	if ( !is_admin() ) {
		wp_deregister_script('jquery');
		wp_register_script('jquery', '//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', false, '3.2.1');
		wp_enqueue_script('jquery');
	}
}

add_action('wp_enqueue_scripts', 'updateJquery');