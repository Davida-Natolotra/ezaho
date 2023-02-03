from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


class UserView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        displayName = request.user.username
        userid = request.user.id
        programme = request.user.groups.all()[0]
        role = request.user.groups.all()[1]
        content = {'displayName': displayName, 'id': userid, 'programme': str(programme), 'role': str(role)}

        return Response(content)
