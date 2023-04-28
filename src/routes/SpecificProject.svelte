<div class="meal">
        <div class="img-container">
            <img src="/test2.jpg" class="meal-img" alt="Avocado Salad">
        </div>
            <div class="meal-content">
              <p class="meal-title">Mamparas</p>
            <p class="meal-description">Distribución de contenido en mamparas.</p>
            </div>
          </div>
<style>
.meal {
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  border-radius: 11px;
  overflow: hidden;
  transition: all 0.4s;
      width: 27rem;
}

.meal:hover {
  transform: translateY(-1.2rem);
  box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);
}

.meal-content {
  padding: 3.2rem 4.8rem 4.8rem 4.8rem;
}


.meal-title {
  font-size: 2.4rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 3.2rem;
}


.meal-description {
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
}

.img-container{
    width: 100%; /* width of container */
    height: 150px; /* height of container */
    overflow: hidden;
    border: 5px solid black;
}
.meal-img {
  margin: -50px 0px 0px -20px;
    width: 200%;
}
</style>