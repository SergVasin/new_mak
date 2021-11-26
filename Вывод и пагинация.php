// вывод ограниченного количества постов на странице

<?php get_header(); ?>

<div class="page__NaP">
    
    <div class="container">
    
    <?php
global $post;
$args = array( 'numberposts' => 1, 'category_name' => 'News' );
$myposts = get_posts( $args );
foreach( $myposts as $post ){ setup_postdata($post);
	?>
	
	    <div class="news__news-item">
                    <div class="news-item__img">
                        <img src="<?php the_field('news__img') ?>" alt="">
                    </div>
                    <div class="news-item__wr">
                        <div class="news-item__top">
                            <h3 class="news-item__top-title"><?php the_title(); ?></h3>
                            <p class="news-item__top-descr"><?php the_field('news_item__descr') ?></p>
                        </div>
                        <div class="news-item__bottom">
                            <p class="news-item__bottom-date"><?php the_time('j F Y'); ?></p>
                            <a href="<?php the_permalink(); ?>" class="news-item__bottom-link">Читать статью</a>
                        </div>
                </div>
        </div>
        
	<?php
}
wp_reset_postdata();
?> 

</div>
 
</div>

<?php get_footer(); ?>



<?php get_header(); ?>

<div class="page__NaP">
    
    <div class="container">
    









// пагинация в своем шаблоне по страницам постов
    
    <?php
// 1 значение по умолчанию
$paged = get_query_var( 'paged' ) ? absint( get_query_var( 'paged' ) ) : 1;

$the_query = new WP_Query( array(
    'posts_per_page' => 1,
    'category_name'  => 'Article',
    'paged'          => $paged,
) );


// цикл вывода полученных записей
while( $the_query->have_posts() ){
    $the_query->the_post();
    ?>
    <!-- HTML каждой записи -->
    
    <div class="news__news-item">
                    <div class="news-item__img">
                        <img src="<?php the_field('news__img') ?>" alt="">
                    </div>
                    <div class="news-item__wr">
                        <div class="news-item__top">
                            <h3 class="news-item__top-title"><?php the_title(); ?></h3>
                            <p class="news-item__top-descr"><?php the_field('news_item__descr') ?></p>
                        </div>
                        <div class="news-item__bottom">
                            <p class="news-item__bottom-date"><?php the_time('j F Y'); ?></p>
                            <a href="<?php the_permalink(); ?>" class="news-item__bottom-link">Читать статью</a>
                        </div>
                </div>
        </div>
    <?php
}
wp_reset_postdata();

// пагинация для произвольного запроса
$big = 999999999; // уникальное число

echo paginate_links( array(
    'base'    => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
    'current' => max( 1, get_query_var('paged') ),
    'total'   => $the_query->max_num_pages
) );
?>
      
    
</div>

    
</div>   
    


<?php get_footer(); ?>