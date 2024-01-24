from django.urls import path
from . import views 

urlpatterns = [
    path('userdata',views.posts),
    
    # path('ksp/<str:rollno>',views.ksp_check),
    # path('ksp/download/<str:rollno>',views.download_certificate),

    # path('soc/<str:rollno>',views.soc_check),
    # path('soc/download/<str:rollno>',views.download_certificate),

    # path('sos/<str:rollno>',views.sos_check),
    # path('sos/download/<str:rollno>',views.download_certificate),

    path('itsp/<str:rollno>',views.itsp_check),
    path('itsp/mentee/download/<str:rollno>',views.download_certificate_itsp),

    path('ls/<str:rollno>',views.ls_check),
    path('download/ntss/<str:rollno>',views.download_certificates_ntss),
    path('download/tss/<str:rollno>',views.download_certificates_tss),

    path('sos/<str:rollno>',views.sos_check),
    path('sos/mentee/download/<str:rollno>',views.download_certificate_sos),
]