# PezDispenser Class from User Stories

# I worked on this challenge [by with: Aleksandra Nowak].
# I spent [.5] hours on this challenge.


# 1. Review the following user stories:
# - As a Pez user, I'd like to be able to "create" a new Pez dispenser with a group of flavors that
#      represent Pez so it's easy to start with a full Pez dispenser.
# - As a Pez user, I'd like to be able to easily count the number of Pez remaining in a dispenser
#      so I can know how many are left.
# - As a Pez user, I'd like to be able to take a Pez from the dispenser so I can eat it.
# - As a Pez user, I'd like to be able to add a Pez to the dispenser so I can save a flavor for later.
# - As a Pez user, I'd like to be able to see all the flavors inside the dispenser so I know the order
#      of the flavors coming up.


# Pseudocode

# Inside of the Pez Dispenser class, create an array with the various flavors indicated in the driver code. 
  
#   Define our pez dispenser to have 10 pez units inside.  
  
#   When we take a pez away, the pez dispenser should show that there are less one pez left.  We can create a method to do this.  The pez dispenser should tell us what flavor was removed from the pez dispenser. 
  
#     If we want to add a pez, the pez dispenser should show there is one additional pez.  We can similarly create a method to do this.  When we add a pez, we should tell it what flavor the pez should be.
    
#       The pez dispenser should be able to show all of the flavors remaining in the pez, in order.


# Initial Solution

# class PezDispenser
  
#   # @flavors = ["cherry","chocolate","cola", "grape", "lemon", "orange", "peppermint", "raspberry", "strawberry"]
#    def initialize(flavors)
#     @flavors = flavors.to_a
#    end
  
#   def pez_count
#     @flavors.length
#   end
  
#   def see_all_pez
#     return @flavors  
#   end
  
#   def add_pez(new_flavor)
#     @flavors << new_flavor
#   end
  
#   def get_pez
#     @flavors.pop
#   end
  
# end

# Refactored Solution

class PezDispenser
  
  # @flavors = ["cherry","chocolate","cola", "grape", "lemon", "orange", "peppermint", "raspberry", "strawberry"]
   def initialize(flavors)
    @flavors = flavors.to_a
   end
  
  def pez_count
    @flavors.length
  end
  
  def see_all_pez
   @flavors  
  end
  
  def add_pez(new_flavor)
    @flavors.push(new_flavor)
  end
  
  def get_pez
    @flavors.pop
  end
  
end




# DRIVER TESTS GO BELOW THIS LINE

flavors = %w(cherry chocolate cola grape lemon orange peppermint raspberry strawberry).shuffle
super_mario = PezDispenser.new(flavors)
puts "A new pez dispenser has been created. You have #{super_mario.pez_count} pez!"
puts "Here's a look inside the dispenser:"
puts super_mario.see_all_pez
puts "Adding a banana pez."
super_mario.add_pez("banana")
puts "Now you have #{super_mario.pez_count} pez!"
puts "Oh, you want one do you?"
puts "The pez flavor you got is: #{super_mario.get_pez}"
puts "Now you have #{super_mario.pez_count} pez!"



# # Reflection

# What concepts did you review in this challenge?

# In this challenge, we reviewed passing methods to each other and having a class implement multiple methods.

# What is still confusing to you about Ruby?

# In this challenge, I was not confused by anything.  This was pretty straightforward.  Within Ruby more generally, I still get tripped
# up with understanding exactly how different enumerables iterate in different ways...for example, I could better understand how to implement .inject.

# What are you going to study to get more prepared for Phase 1?

# I'm just going to review the variety of methods and make a master cheat sheet that I can review and study.


