from flask_sqlalchemy import SQLAlchemy
from app import db



class Role(db.Model):
    __tablename__ = 'roles'
    rid = db.Column(db.Integer, primary_key=True)
    role_name = db.Column(db.String(30), default='common')

    def __repr__(self):
        return f"({self.rid}){self.role_name}"


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(30), unique=True)
    user_password = db.Column(db.String(30))
    user_role = db.Column(db.Integer, db.ForeignKey('roles.rid'), default=1)
    role = db.relationship('Role', backref=db.backref('users', lazy='dynamic'))

    def __repr__(self):
        return f"User:{self.id}   Passwrad:{self.user_name}({self.role.role_name})"



class Temp(db.Model):
    __tablename__ = 'temps'
    id = db.Column(db.Integer, primary_key=True)
    temp_time = db.Column(db.DateTime, default=db.func.now())
    value_b = db.Column(db.Text, nullable=True)

    def __repr__(self):
        return f"time({self.temp_time}):{self.value_b}"

class Freshift(db.Model):
    __tablename__ = 'freshifts'
    id = db.Column(db.Integer, primary_key=True)
    freshift_time = db.Column(db.DateTime, default=db.func.now())
    value_b = db.Column(db.Text, nullable=True)

    def __repr__(self):
        return f"time({self.freshift_time}):{self.value_b}"

class Center(db.Model):
    __tablename__ = 'centers'
    id = db.Column(db.Integer, primary_key=True)
    zoom = db.Column(db.Integer, nullable=True)
    lng = db.Column(db.Float, default=116.404844)
    lat = db.Column(db.Float, default=39.913828)

    def __repr__(self):
        return f"lng:{self.lng}, lat:{self.lat}; zoom:{self.zoom}"


class Path(db.Model):
    __tablename__ = 'paths'
    id = db.Column(db.Integer, primary_key=True)
    lng = db.Column(db.Float, default=116.404844)
    lat = db.Column(db.Float, default=39.913828)

    def __repr__(self):
        return f"lng:{self.lng}, lat:{self.lat}"


class Menu(db.Model):
    __tablename__ ='menus'
    mid = db.Column(db.Integer, primary_key=True)
    menu_name = db.Column(db.String(30), default='newmenu')
    menu_code = db.Column(db.String(10), default='1')
    con_role = db.relationship('Role', secondary='menu_role', backref=db.backref('menus', lazy='dynamic'))

    def __repr__(self):
        return f"Menu({self.mid}):{self.menu_name}"


class Submenu(db.Model):
    __tablename__ ='submenus'
    sid = db.Column(db.Integer, primary_key=True)
    sub_name = db.Column(db.String(30), default='new submenu')
    father_menu = db.relationship('Menu', foreign_keys='Submenu.father_menu_id', backref=db.backref('submenus', lazy='dynamic'))
    father_menu_id = db.Column(db.Integer, db.ForeignKey('menus.mid'), default=1)

    def __repr__(self):
        return f"subMenu({self.sid}):{self.sub_name}"


class Para(db.Model):
    __tablename__ = 'paras'
    pid = db.Column(db.Integer, primary_key=True)
    para_name = db.Column(db.String(30), default='new para')
    para_code = db.Column(db.String(10), unique=True)
    type_name = db.Column(db.String(30), nullable=True)
    longth_choices = [(8, 'int8_t'), (16, 'int16_t'), (32, 'int32_t')]
    longth = db.Column(db.Integer, default=16)
    writable = db.Column(db.Boolean, default=False)
    unit = db.Column(db.String(10), nullable=True)
    time = db.Column(db.DateTime, default=db.func.now())
    read_value = db.Column(db.Float, nullable=True)
    write_value = db.Column(db.Float, nullable=True)
    farther_submenu = db.relationship('Submenu', foreign_keys='Para.farther_submenu_id', backref=db.backref('paras', lazy='dynamic'))
    farther_submenu_id = db.Column(db.Integer, db.ForeignKey('submenus.sid'), default=1)

    def __repr__(self):
        return f"({self.pid})para={self.para_name},type={self.type_name},code={self.para_code}"


# 用于存储菜单和角色多对多关系的关联表   原来没有，先不用
menu_role = db.Table('menu_role',
                     db.Column('menu_id', db.Integer, db.ForeignKey('menus.mid')),
                     db.Column('role_id', db.Integer, db.ForeignKey('roles.rid'))
                     )