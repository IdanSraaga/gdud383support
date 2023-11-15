const SurveyForm = () => {
    return (
        <form>
        <div class="container mt-3 mt-lg-5">
            <header class="mb-4">
                <h1 class="display-3 text-center ">גדוד 383</h1>
                <h2 class="lead text-center">סקר שירות תמיכת גדוד 383</h2>
            </header>
            <main>
                <ul class="nav nav-tabs nav-justified">
                    <li class="nav-item  "><a href="#step-1" id="step-1-tab" data-bs-toggle="tab" class="nav-link h3 active">step 1 <small
                                class="d-none d-md-block lead">personal info</small></a></li>
                    <li class="nav-item  "><a  href="#step-2" id="step-2-tab" data-bs-toggle="tab" class="nav-link h3 disabled ">step 2 <small
                                class="d-none d-md-block lead">questions/answers</small></a></li>
                    <li class="nav-item  "><a href="#step-3" id="step-3-tab" data-bs-toggle="tab" class="nav-link h3 disabled">step 3 <small
                                class="d-none d-md-block lead">questions/rating</small></a></li>
                </ul>
                <div class="tab-content">
                    <div id="step-1" class="tab-pane fade  show active   pt-4 ">
                        <div class="row">
                            <div class="col-md-3">
                                <label for="" class="form-label fw-bold">מין:</label>
                                <div>
                                    <div class="form-check-inline form-check">
                                        <input type="radio" name="sex" id="sex-male" value="male" class="form-check-input"></input>
                                        <label for="sex-male" class="form-check-label">זכר</label>
                                    </div>
                                    <div class="form-check-inline form-check">
                                        <input type="radio" name="sex" id="sex-female" value="female"
                                            class="form-check-input"></input>
                                        <label for="sex-female" class="form-check-label">נקבה</label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 my-3 my-md-auto">
                                <label for="age" class="form-label fw-bold" >
                                    גיל:
                                </label>
                                <input type="number" class="form-control" id="age" >
                                    <small id="ageerror"></small>
                                </input>   
                                
                            </div>
                            <div class="col-md-6 my-3 my-md-auto">
                                <label for="tel" class="form-label fw-bold" >
                                    טלפון:
                                </label>
                                <input type="tel" class="form-control" id="tel" maxlength="10">
                                    <small id="telerror"></small>
                                </input>   
                            </div>
                        </div>
                        <div class="row my-md-3">
                            <div class="col-md-6 my-3 my-md-auto">
                                <label for="name" class="form-label fw-bold">שם מלא:</label>
                                <input type="text" id="name" class="form-control" placeholder="שם מלא">
                                    <small id="nameerror"></small>
                                </input>
                     
                            </div>
                            <div class="col-md-6 my-3 my-md-auto">
                                <label for="email" class="form-label fw-bold">דוא"ל:</label>
                                <input type="email" id="email" name="email" class="form-control" placeholder="Username@domain.com">
                                    <small id="emailerror"></small>
                                </input>                      
                            </div>
                        </div>
                        <div class="row my-md-3">
                            <div class="col-md-9 my-3 my-md-auto">
                                <label for="address-1" class="form-label fw-bold">Address part 1:</label>
                                <input type="text" id="address-1" class="form-control"
                                    placeholder="123 streetname neighborhood"></input>
                            </div>
                            <div class="col-md-3 my-3 my-md-auto">
                                <label for="address-2" class="form-label fw-bold">Address part 2:</label>
                                <input type="text" id="address-2" class="form-control" placeholder="B3 3th floor"></input>
                            </div>
                        </div>
                        <div class="row my-md-3">
                            <div class="col-md-6 my-3 my-md-auto">
                                <label for="city" class="form-label fw-bold">City:</label>
                                <input type="text" id="city" class="form-control" placeholder="Tehran"></input>
                            </div>
                            <div class="col-md-2 my-3 my-md-auto">
                                <label for="zip" class="form-label fw-bold">Zip:</label>
                                <input type="number" id="zip" class="form-control" placeholder="0098-21"></input>
                            </div>
                            <div class="col-md-4 my-3 my-md-auto">
                                <label for="country" class="form-label fw-bold">Country:</label>
                                <input list="countries" id="country" class="form-control"></input>
                                <datalist id="countries">
                                    <option value="Iran"></option>
                                    <option value="England"></option>
                                    <option value="Sweden"></option>
                                    <option value="Austria"></option>
                                </datalist>
    
                            </div>
                        </div>
                        <button type="button" class="btn btn-outline-secondary d-block ms-auto" id="go-to-step-2">Step
                            2
                        </button>
    
    
    
                    </div>
                    <div id="step-2" class="tab-pane fade  pt-4 ">
                        <h5 class="text-center my-2">Question #1: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolorum.</h5>
                        <div class="row my-3">
                            <div class="col-lg-6">
                                <figure class="figure">
                                    <img src="img/1600x900.png" class="figure-img img-fluid rounded" alt="img"></img>
                                    <figcaptiin class="figure-caption">Lorem ipsum dolor sit.</figcaptiin>
                                </figure>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-check ">
                                    <input type="radio" id="answer-1" class="form-check-input " name="answer-1"></input>
                                    <label for="answer-1" class="form-label">Answer-1</label>
                                </div>
                                <div class="form-check ">
                                    <input type="radio" id="answer-2" class="form-check-input " name="answer-1"></input>
                                    <label for="answer-2" class="form-label">Answer-2</label>
                                </div>
                                <div class="form-check ">
                                    <input type="radio" id="answer-3" class="form-check-input " name="answer-1"></input>
                                    <label for="answer-3" class="form-label">Answer-3</label>
                                </div>
                                <div class="form-check ">
                                    <input type="radio" id="answer-4" class="form-check-input " name="answer-1"></input>
                                    <label for="answer-4" class="form-label">Answer-4</label>
                                </div>
                                <div class="form-check ">
                                    <input type="radio" id="answer-5" class="form-check-input " name="answer-1"></input>
                                    <label for="answer-5" class="form-label">
                                        <input type="text" class="form-control form-control-sm" size="30"></input>
                                    </label>
                                    <p class="text-muted small mt-1">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Sed numquam alias dolores?</p>
    
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <h5 class="text-center my-2">Question #2: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolorum.</h5>
                        <div class="row my-3">
                            <div class="col-lg-6">
                                <figure class="figure">
                                    <img src="img/1600x900.png" class="figure-img img-fluid rounded" alt="img"></img>
                                    <figcaptiin class="figure-caption">Lorem ipsum dolor sit.</figcaptiin>
                                </figure>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-check ">
                                    <input type="radio" id="answer-6" class="form-check-input " name="answer-2"></input>
                                    <label for="answer-6" class="form-label">Answer-1</label>
                                </div>
                                <div class="form-check ">
                                    <input type="radio" id="answer-7" class="form-check-input " name="answer-2"></input>
                                    <label for="answer-7" class="form-label">Answer-2</label>
                                </div>
                                <div class="form-check ">
                                    <input type="radio" id="answer-8" class="form-check-input " name="answer-2"></input>
                                    <label for="answer-8" class="form-label">Answer-3</label>
                                </div>
                                <div class="form-check ">
                                    <input type="radio" id="answer-9" class="form-check-input " name="answer-2"></input>
                                    <label for="answer-9" class="form-label">Answer-4</label>
                                </div>
                                <div class="form-check ">
                                    <input type="radio" id="answer-10" class="form-check-input " name="answer-2"></input>
                                    <label for="answer-10" class="form-label">
                                        <input type="text" class="form-control form-control-sm" size="30"></input>
                                    </label>
                                    <p class="text-muted small mt-1">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Sed numquam alias dolores?</p>
    
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <h5 class="text-center my-2">Question #3: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolorum.</h5>
                        <div class="row my-3">
                            <div class="col-lg-6">
                                <figure class="figure">
                                    <img src="img/1600x900.png" class="figure-img img-fluid rounded" alt="img"></img>
                                    <figcaptiin class="figure-caption">Lorem ipsum dolor sit.</figcaptiin>
                                </figure>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-check ">
                                    <input type="checkbox" id="answer-11" class="form-check-input " name="answer-3"></input>
                                    <label for="answer-11" class="form-label">Answer-1</label>
                                </div>
                                <div class="form-check ">
                                    <input type="checkbox" id="answer-12" class="form-check-input " name="answer-4"></input>
                                    <label for="answer-12" class="form-label">Answer-2</label>
                                </div>
                                <div class="form-check ">
                                    <input type="checkbox" id="answer-13" class="form-check-input " name="answer-5"></input>
                                    <label for="answer-13" class="form-label">Answer-3</label>
                                </div>
                                <div class="form-check ">
                                    <input type="checkbox" id="answer-14" class="form-check-input " name="answer-6"></input>
                                    <label for="answer-14" class="form-label">Answer-4</label>
                                </div>
                                <div class="form-check ">
                                    <input type="checkbox" id="answer-15" class="form-check-input " name="answer-7"></input>
                                    <label for="answer-15" class="form-label">
                                        <input type="text" class="form-control form-control-sm" size="30"></input>
                                    </label>
                                    <p class="text-muted small mt-1">Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Sed numquam alias dolores?</p>
    
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-outline-secondary ms-auto d-block" id="go-to-step-3">Step
                            3</button>
                    </div>
                    <div id="step-3" class="tab-pane fade my-3  pt-4 ">
                        <div class="row my-2">
                            <div class="col-lg-6">
                                <h2 class="h5">Question #4: Lorem ipsum dolor sit ameo est dolquibusdam optio voluptas! Ex.
                                </h2>
                                <p class="small">Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>
    
                            </div>
                            <div class="col-lg-6 ">
                                <div class=" d-flex justify-content-between mb-2">
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" value="q4-a1" id="q4-a1" name="q4-a"></input>
                                        <label class="form-check-label" for="q4-a1">1</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" value="q4-a2" id="q4-a2" name="q4-a"></input>
                                        <label class="form-check-label" for="q4-a2">2</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" value="q4-a3" id="q4-a3" name="q4-a"></input>
                                        <label class="form-check-label" for="q4-a3">3</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" value="q4-a4" id="q4-a4" name="q4-a"></input>
                                        <label class="form-check-label" for="q4-a4">4</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" value="q4-a5" id="q4-a5" name="q4-a"></input>
                                        <label class="form-check-label" for="q4-a5">5</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" value="q4-ana" id="q4-ana" name="q4-a"></input>
                                        <label class="form-check-label" for="q4-ana">נמנע</label>
                                    </div>
                                </div>
                                <textarea class="form-control" rows="2"
                                    placeholder="write something for Ali ..."></textarea>
    
    
    
    
    
                            </div>
                            <hr class="mt-4"></hr>
    
    
                        </div>
                        <div class="row my-2">
                            <div class="col-lg-6">
                                <h2 class="h5">Question #5: Lorem ipsum dolor sit ameo est dolquibusdam optio voluptas! Ex.
                                </h2>
                                <p class="small">Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>
    
                            </div>
                            <div class="col-lg-6 ">
                                <div class=" d-flex justify-content-between mb-2">
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" value="q5-a1" id="q5-a1" name="q5-a"></input>
                                        <label class="form-check-label" for="q5-a1">1</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" value="q5-a2" id="q5-a2" name="q5-a"></input>
                                        <label class="form-check-label" for="q5-a2">2</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" value="q5-a3" id="q5-a3" name="q5-a"></input>
                                        <label class="form-check-label" for="q5-a3">3</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" value="q5-a4" id="q5-a4" name="q5-a"></input>
                                        <label class="form-check-label" for="q4-a4">4</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" value="q5-a5" id="q5-a5" name="q5-a"></input>
                                        <label class="form-check-label" for="q4-a5">5</label>
                                    </div>
                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" value="q5-ana" id="q5-ana" name="q5-a"></input>
                                        <label class="form-check-label" for="q5-ana">נמנע</label>
                                    </div>
                                </div>
                                <textarea class="form-control" rows="2"
                                    placeholder="write something for Ali ..."></textarea>
    
    
    
    
    
                            </div>
                            <hr class="mt-4"> </hr>
    
    
                        </div>
                        <div class="row my-2">
                            <div class="col-lg-6">
                                <h2 class="h5">Question #6: Lorem ipsum dolor sit ameo est dolquibusdam optio voluptas! Ex.
                                </h2>
                                <p class="small">Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>
    
                            </div>
                            <div class="col-lg-6 ">
                                <div class="  mb-2">
                                    <div class="btn-group btn-group-lg w-100">
                                        <input type="radio" class="btn-check" value="q6-a1" id="q6-a1" name="q6-a"></input>
                                        <label class="btn btn-outline-secondary" for="q6-a1">1</label>
    
    
                                        <input type="radio" class="btn-check" value="q6-a2" id="q6-a2" name="q6-a"></input>
                                        <label class="btn btn-outline-secondary" for="q6-a2">2</label>
    
    
                                        <input type="radio" class="btn-check" value="q6-a3" id="q6-a3" name="q6-a"></input>
                                        <label class="btn btn-outline-secondary" for="q6-a3">3</label>
    
                                        <input type="radio" class="btn-check" value="q6-a4" id="q6-a4" name="q6-a"></input>
                                        <label class="btn btn-outline-secondary" for="q4-a4">4</label>
    
                                        <input type="radio" class="btn-check" value="q6-a5" id="q6-a5" name="q6-a"></input>
                                        <label class="btn btn-outline-secondary" for="q6-a5">5</label>
    
                                        <input type="radio" class="btn-check" value="q6-ana" id="q6-ana" name="q6-a"></input>
                                        <label class="btn btn-outline-secondary" for="q6-ana">נמנע</label>
                                    </div>
                                </div>
                                <textarea class="form-control" rows="2"
                                    placeholder="write something for Ali ..."></textarea>
    
    
    
    
    
                            </div>
                            <hr class="mt-4"></hr>
    
                        </div>
                        <div class="row my-2">
                            <div class="col-lg-6">
                                <h2 class="h5">Question #7: Lorem ipsum dolor sit ameo est dolquibusdam optio voluptas! Ex.
                                </h2>
                                <p class="small">Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>
    
                            </div>
                            <div class="col-lg-6 ">
                                <div class="  mb-2">
                                    <div class="btn-group btn-group-lg w-100">
                                        <input type="radio" class="btn-check" value="q7-a1" id="q7-a1" name="q7-a"></input>
                                        <label class="btn btn-outline-secondary" for="q7-a1">1</label>
    
    
                                        <input type="radio" class="btn-check" value="q7-a2" id="q7-a2" name="q7-a"></input>
                                        <label class="btn btn-outline-secondary" for="q7-a2">2</label>
    
    
                                        <input type="radio" class="btn-check" value="q7-a3" id="q7-a3" name="q7-a"></input>
                                        <label class="btn btn-outline-secondary" for="q7-a3">3</label>
    
                                        <input type="radio" class="btn-check" value="q7-a4" id="q7-a4" name="q7-a"></input>
                                        <label class="btn btn-outline-secondary" for="q4-a4">4</label>
    
                                        <input type="radio" class="btn-check" value="q7-a5" id="q7-a5" name="q7-a"></input>
                                        <label class="btn btn-outline-secondary" for="q7-a5">5</label>
    
                                        <input type="radio" class="btn-check" value="q7-ana" id="q7-ana" name="q7-a"></input>
                                        <label class="btn btn-outline-secondary" for="q7-ana">נמנע</label>
                                    </div>
                                </div>
                                <textarea class="form-control" rows="2"
                                    placeholder="write something for Ali ..."></textarea>
    
    
    
    
    
                            </div>
                            <hr class="mt-4"></hr>
    
    
                        </div>
                        <div class="row my-2">
                            <div class="col-lg-6">
                                <h2 class="h5">Question #8: Lorem ipsum dolor sit ameo est dolquibusdam optio voluptas! Ex.
                                </h2>
                                <p class="small">Lorem ipsum dolor sit. Lorem, ipsum dolor.</p>
    
                            </div>
                            <div class="col-lg-6 ">
                                <div class="d-flex justify-content-between  mb-2">
                                    <span class="me-3">1</span>
                                    <input type="range" max="5" min="1" class="form-range" name="q7-a"></input>
                                    <span class="ms-3">5</span>
                                </div>
                                <textarea class="form-control" rows="2"
                                    placeholder="write something for Ali ..."></textarea>
                            </div>
                        </div>
                        <button type="submit" id="submitButton" class="btn btn-secondary my-4  d-block ms-auto">
                            Submit
                            <span class="spinner-border spinner-border-sm d-none"></span>
                        </button>
                    </div>
    
    
                </div>
            </main>
        </div>
        </form>
    );
  };
  
  export default SurveyForm;