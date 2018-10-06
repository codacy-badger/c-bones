/**
 * <%= artifactID %>: <%= desc %>
 * <p>
 * Copyright (C) <%= user %>
 * <p>
 * This file is part of <%= artifactID %>.
 * <p>
 * <%= artifactID %> is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * <p>
 * <%= artifactID %> is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * <p>
 * You should have received a copy of the GNU General Public License
 * along with <%= artifactID %>. If not, see <http://www.gnu.org/licenses/>.
 *
 * @author: <%= user %>
 * @email: <%= email %>
 */


#include <cstdlib>
#include <iostream>

#include <boost/program_options.hpp>

static const char* tool_ =
  "\n<%= artifactID %> - a great tool";

int main(int argc, char* argv[])
{
    std::cout << tool_ << std::endl;
    return EXIT_SUCCESS;
}
