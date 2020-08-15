<template>
    <div>
        <header class="masthead" style="background-image: url('/assets/img/chevrolet-blazer.jpg');">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 mx-auto">
                        <div class="post-heading">
                            <h1 v-if="tipoAdministrador === 'simple'"><b>Bienvenido a la página de Administración</b></h1>
                            <h1 v-else-if="tipoAdministrador ==='avanzado'"><b>Esta página de administración está en construcción.Intente como administrador simple</b></h1>
                            <h1 v-else><b>Ruta incorrecta, inténtalo nuevamente</b></h1>
                            <h2 class="subheading"><b>Llega como la primera SUV deportiva de la marca</b></h2>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
export default {   
    name:'Administrador', 
    props: ['tipoAdministrador']
}
</script>