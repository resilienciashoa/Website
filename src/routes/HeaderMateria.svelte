<script>
    import IntersectionObserver from "svelte-intersection-observer";

</script>
<div class='fixed-div'>
    <div class="header">
   <div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--main">TLRIID</span>
                </h1>
            </div>
    </div>
</div>

<svelte:window />


<style>
    .fixed-div{
          transition: all 3s ease-in-out;
        position: fixed;
         width: 100%;
        z-index:100;
        top:0;
    }
	.header {
		height: 10vh;
		background-image: 
			url(/TLRIID/books.jpg);
        box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2);
    position: relative;
		background-size: cover;
		background-position: center;
	}
	@media (max-width: 768px) {
		.header {
			height: 100vh;
		}
	}
    .header__text-box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    }
    .heading-primary {
   color: #fff;
    text-transform: uppercase;
    backface-visibility: hidden;
   /* margin-bottom: 6rem;*/
}
    .heading-primary--main {
        display: block;
        font-size: 6rem;
        font-weight: 400;
}
    .heading-primary--sub {
        display: block;
            font-size: 2rem;
    font-weight: 700;
}
</style>
