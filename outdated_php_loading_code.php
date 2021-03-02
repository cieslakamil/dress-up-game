<?php
    // LOADING CLOTHES
    $clothes_dir = 'resources/clothes';
    $clothes_subdirs = glob($clothes_dir . '/*', GLOB_ONLYDIR);
    $clothes_subdirs_basenames = array_diff(scandir($clothes_dir), array('..', '.'));
    $clothes_types = array_combine($clothes_subdirs_basenames, $clothes_subdirs);

    function insert_clothes($cloth_type, $clothes_list)
    {
        if ($dir = $clothes_list[$cloth_type]) {
            $file_list = array_diff(scandir($dir), array('..', '.'));
            foreach ($file_list as $file_it => $file) {
                $img_path = $dir . '/' . $file;
                // html cloth div insertion start
                //echo ("<div class =")

                // html image insertion
                $html_img_format = '<img id="%s%d" src="%s" class="%s cloth">';
                echo (sprintf($html_img_format, $cloth_type, $file_it, $img_path, $cloth_type));
                // html dragpoint insertion
                $html_dragpoint_format = '<div id="%s%d-dragPoint" class="dragPoint %sDragPoint"></div>';
                echo (sprintf($html_dragpoint_format, $cloth_type, $file_it, $cloth_type));
                // js drag function insertion
                $js_drag_func_format = '<script>dragElement(document.getElementById("%s%d"));</script>';
                echo (sprintf($js_drag_func_format, $cloth_type, $file_it));
            }
        }
    }
    foreach ($clothes_types as $item => $dir) insert_clothes($item, $clothes_types);
    //insert_clothes('thigh_highs', $clothes_types);

?>

<?php
    $icons_dir = 'resources/icons/';
    $icons = array_diff(scandir($icons_dir), array('..', '.'));
    foreach ($icons as $icon) {
        $html_icon_format = '<div><img id="%s" src="%s" alt="%s"></div>';
        echo (sprintf($html_icon_format, basename($icon, '.PNG'), $icons_dir . $icon, $icon));
    }
?>  