<template>
    <main>
        <Navbar />
        <div class="my-5">
            <div class="mx-auto w-25 " style="max-width:100%;">
              <h2 class="text-center mb-3">Add Patient</h2>
              <form @submit.prevent="addPatient">
                <!--name-->
                <div class="row">
                  <div class="col-md-12 form-group mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input id="name"  type="text" name="name" class="form-control" placeholder="Name" required v-model="patient.name">
                  </div>
                </div>

                
                <!--Email-->
                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input id="email" type="email"  name="email" class="form-control" placeholder="email" required v-model="patient.email" >
                    </div>
                  </div>

                <!--Phone Number-->
                <div class="row">
                    <div class="col-md-12 form-group mb-3">
                      <label for="pNo" class="form-label">Phone Number</label>
                      <input id="pNo" type="text"  name="pNo" class="form-control" placeholder="Phone Number" required v-model="patient.pNo" >
                    </div>
                  </div>
      
                <!--Gender-->
                <label for="gender" class="form-label">Gender</label>
                <div class="form-check">
                  <input class="form-check-input"   type="radio" name="gender" id="male" value="male" v-model="patient.gender">
                  <label class="form-check-label" for="male">Male</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio"   name="gender" id="female" value="female" v-model="patient.gender">
                  <label class="form-check-label" for="female">Female</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio"   name="gender" id="others" checked value="others" v-model="patient.gender">
                  <label class="form-check-label" for="others">Others</label>
                </div>
               
                
               
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input class="btn btn-primary w-100" type="submit" value="Submit">
                  </div>
                </div>
      
                <div>
                  
                </div>
              </form>
        
            </div>
          </div>
    </main>
</template>


<script>
import Navbar from '../components/Navbar.vue';

    export default {
        name: 'AddPatient',
        components: {
            Navbar
        },

        data() {
            return {
                patient : {
                    name: '',
                    email: '',
                    gender: '',
                    pNo: ''
                }
            }
        },

        methods: {
            addPatient(){
                fetch('http://localhost:8080/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.patient)
                })
                .then(data => {
                    console.log(data)
                    this.$router.push("/");
                })

            }
        },
            
    }


</script>