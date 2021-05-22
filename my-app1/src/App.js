import logo from './images/masjid.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        
      </header>



      <h2>I'tikhaf Payment Form</h2>
      <main>
  
  <div className="content">
  <form>
      <h4>Account</h4>
      <div className="input-group">
        <div className="input-box">
          <input type="text" placeholder="Full Name" required className="name" />
          <i class="fa fa-user icon"></i>
        </div>
        <div className="input-box">
          <input type="text" placeholder="username" required className="name" />
          <i class="fa fa-user icon"></i>
        </div>
      </div>
      <div className="input-group">
        <div className="input-box">
          <input type="email" placeholder="email" required class="name"/>
          <i class="fa fa-envelope"></i>
        </div>
      </div>

      <div className="input-group">
        <div   className="input-box">
          <h4>Date of birth</h4>
          <div id='do'>
          <input type="text" placeholder="DD" className="dob"/>
          <input type="text" placeholder="MM" className="dob"/>
          <input type="text" placeholder="YYY" className="dob"/>
          </div>
        </div>
        <div className="input-box">
          <h4>Gender</h4>
          <input type="radio" name="gender" checked id="b1" class="radio"/>
          <label for="b1">Male</label>
          <input type="radio" name="gender" className="radio" id="b2"/>
          <label for="b2">Female</label>
        </div>
      </div>

      <div class="input-group">
        <div class="input-box">
          <h4>Payment Details</h4>
          <input type="radio" name="pay" id="bc1" checked className="radio"/>
          <label for="bc1">
            <span>
              <i class="fa fa-cc-visa"> Credit card</i>
            </span>
          </label>
          <input type="radio" name="pay" id="bc2" className="radio"/>
          <label for="bc2">
            <span>
              <i class="fa fa-cc-paypal"> paypal </i>
            </span>
          </label>
        </div>
      </div>

      <div className="input-group">
        <div className="input-box">
          <input type="tel" class="name" placeholder="card number" required/>
          <i class="fa fa-credit-card icon"></i>
        </div>
      </div>

      <div className="input-group">
        <div className="input-box">
          <input type="tel" required placeholder="Card CVC" className='name' />
          <i class="fa fa-user icon"></i>
        </div>
        <div id='in-box' class="input-box">
        <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
            
          </select>
          <select>
            <option>Jan</option>
            <option>Feb</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>Sept</option>
            <option>Oct</option>
            <option>Nov</option>
            <option>Dec</option>
            
          </select>
          <select>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
          </select>
        </div>
      </div>

      <div class="input-group">
        <div class="input-box">
          <button type="submit" className='submit'>Pay Now</button>
        </div>
      </div>

    </form>
    <div>

  <img src={logo}  alt='logo'/>

    </div>
</div>


      </main>
      
    </div>
  );
}

export default App;
