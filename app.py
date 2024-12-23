from flask import (
    Flask,
    g,
    redirect,
    render_template,
    request,
    session,
    url_for
)

class User:
    def __init__(self, id, username, password):
        self.id = id
        self.username = username
        self.password = password

    def __repr__(self):
        return f'<User: {self.username}>'

users = []
users.append(User(id=1, username='A', password='p'))
users.append(User(id=2, username='Becca', password='secret'))
users.append(User(id=3, username='Carlos', password='somethingsimple'))

app = Flask(__name__)
app.secret_key = 'somesecretkeythatonlyishouldknow'

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session.pop('user_id', None)

        username = request.form['username']
        password = request.form['password']
        
        user = next((x for x in users if x.username == username), None)
        if user and user.password == password:
            session['user_id'] = user.id
            return redirect(url_for('index'))

        return redirect(url_for('login'))

    return render_template('login.html')
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
 
        # Check if the username already exists
        if any(user.username == username for user in users):
            return "Username already taken!", 400
 
        # Add the new user
        new_user = User(id=len(users) + 1, username=username, password=password)
        users.append(new_user)
        return redirect(url_for('login'))  # Redirect to login after successful signup
 
    return render_template('signup.html')

@app.route('/book', methods=['GET', 'POST'])
def book():
    confirmation = False
    if request.method == 'POST':
        # إضافة منطق الحجز هنا
        confirmation = True
        name = request.form['name']
        phone = request.form['phone']
        email = request.form['email']
        guests = request.form['guests']
        date = request.form['date']
        return render_template('book.html', confirmation=confirmation, name=name, phone=phone, email=email, guests=guests, date=date)
    return render_template('book.html', confirmation=confirmation)


@app.route('/creat')
def create():
    return render_template('creat.html')


@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/menu')
def menu():
    return render_template('menu.html')

# @app.route('/book')
# def book():
#     return render_template('book.html')

if __name__ == '__main__':
    app.run(debug=True)  
