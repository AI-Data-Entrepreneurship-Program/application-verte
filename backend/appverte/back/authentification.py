#from passlib.apps import custom_app_context as pwd_context
#from appverte.back.tables import db, Admin


#class Authentification(db.Model):
#
 #   def hash_password(self, password):
  #      self.password_hash = pwd_context.encrypt(password)
#
 #   def verify_password(self, password):
  #      return pwd_context.verify(password, self.password_hash)